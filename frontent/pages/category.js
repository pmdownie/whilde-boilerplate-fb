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
            subCategoryActive: this.props.categories.loaded
                ? this.props.categories.items[this.props.category].artworks[0]
                      .subcategory
                : '',
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { listView, active } = this.state
        if (!listView && listView !== prevState.listView) {
            this.slider.slickGoTo(active)
        }
    }

    settings = () => {
        return {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) =>
                this.setState({
                    active: next,
                    subCategoryActive: this.props.categories.items[
                        this.props.category
                    ].artworks[next].subcategory,
                }),
        }
    }

    toggleListView = () =>
        this.setState(({ listView }) => ({ listView: !listView }))

    next = () => this.slider.slickNext()

    prev = () => this.slider.slickPrev()

    handleSubcategoryClick = subcategory => {
        const category = this.props.categories.items[this.props.category]
        const found = category.artworks.findIndex(
            artwork => artwork.subcategory === subcategory
        )

        this.slider.slickGoTo(found)
        this.setState({
            active: found,
            subCategoryActive: subcategory,
        })
    }

    handleListViewItemClick = (title, subcategory) => {
        const category = this.props.categories.items[this.props.category]
        const active = category.artworks.findIndex(
            artwork => artwork.title === title
        )

        this.setState({
            active,
            subCategoryActive: subcategory,
            listView: false,
        })
    }

    render() {
        const category = this.props.categories.items[this.props.category]
        const { active } = this.state
        return (
            <Container>
                <StyledHeader {...this.state}>
                    <div>{category.title}</div>
                    <div
                        className="right hideMobile cursor hoverGrey"
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
                    handleSubcategoryClick={this.handleSubcategoryClick}
                    toggleListView={this.toggleListView}
                    handleListViewItemClick={this.handleListViewItemClick}
                />
                <StyledFooter {...this.state}>
                    <div>
                        {active + 1} / {category.artworks.length}
                    </div>
                    <div className="center hideMobile">
                        {category.artworks[active].dimensions}
                    </div>
                    <div className="mobile grey right">
                        {category.artworks[active].dimensions}
                    </div>
                    <div
                        className="right hideMobile cursor hoverGrey"
                        onClick={this.toggleListView}
                    >
                        View All
                    </div>
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
