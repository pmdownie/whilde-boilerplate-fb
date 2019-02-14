import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchContent } from '../actions/content'
import { toggleInfo } from '../actions/info'
import { toggleMenu } from '../actions/menu'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import StyledHeader from '../components/StyledHeader'
import StyledFooter from '../components/StyledFooter'
import CategoryBody from '../components/CategoryBody'
import MenuTrigger from '../components/MenuTrigger'

const mapStateToProps = ({ categories, info, menu }) => ({
    categories,
    info,
    menu,
})

const Container = styled.div`
    display: grid;
    grid-template-rows: min-content auto min-content;
    height: 100%;
`

class Category extends Component {
    static async getInitialProps({ store, query }) {
        const id = query.category
        await store.dispatch(fetchContent('HOMEPAGE'))
        await store.dispatch(fetchContent('INFO'))
        await store.dispatch(fetchContent('CATEGORY', id))
        return query
    }

    state = {
        active: 0,
        subCategoryActive: '',
        listView: false,
    }

    componentDidMount() {
        this.setState({
            subCategoryActive: this.props.categories.items[this.props.category]
                .artworks[0].subcategory,
        })
    }

    settings = () => {
        return {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            beforeChange: (current, next) =>
                this.setState({
                    active: next,
                    subCategoryActive: this.props.categories.items[
                        this.props.category
                    ].artworks[next].subcategory,
                }),
        }
    }

    next = () => this.slider.slickNext()

    prev = () => this.slider.slickPrev()

    render() {
        const category = this.props.categories.items[this.props.category]
        const { active } = this.state
        return (
            <Container>
                <StyledHeader>
                    <div className="bold">{category.title}</div>
                    <div
                        className="right hideMobile"
                        onClick={() => this.props.router.push('/')}
                    >
                        Close
                    </div>
                    <MenuTrigger />
                </StyledHeader>
                <CategoryBody
                    category={category}
                    {...this.state}
                    sliderRef={el => (this.slider = el)}
                    settings={this.settings}
                    next={this.next}
                    prev={this.prev}
                />
                <StyledFooter>
                    <div>
                        {active + 1} / {category.artworks.length}
                    </div>
                    <div className="center hideMobile">
                        {category.artworks[active].dimensions}
                    </div>
                    <div className="mobile grey right">
                        {category.artworks[active].dimensions}
                    </div>
                    <div className="right hideMobile">View All</div>
                </StyledFooter>
            </Container>
        )
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        { fetchContent, toggleInfo, toggleMenu }
    )(Category)
)
