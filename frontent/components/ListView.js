import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    max-width: 920px;
    margin: 6rem auto 0;
    padding: 0 3rem;

    @media (min-width: ${({ theme }) => theme.desktoplarge}) {
        max-width: 100%;
        width: 60%;
        padding: 0;
    }
`
const Inner = styled.div`
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 6rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.lightgrey};
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        grid-column-gap: 1.2rem;
        grid-row-gap: 1.2rem;

        img {
            width: 100%;
            display: block;
        }
    }

    .image {
        cursor: pointer;
        transition: box-shadow 0.3s ease;

        &:hover {
            box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.05);
        }
    }
`

const ListViewBlock = category => (
    <Inner>
        <div className="title">{category.title}</div>
        <div className="grid">
            {category.artworks.map((artwork, i) => (
                <div
                    key={artwork.title}
                    className="image"
                    onClick={() =>
                        category.handleListViewItemClick(
                            artwork.title,
                            category.title
                        )
                    }
                >
                    <img
                        src={`https:${artwork.smallImage.url}`}
                        alt={artwork.title}
                    />
                </div>
            ))}
        </div>
    </Inner>
)

const ListView = ({ category, handleListViewItemClick }) => {
    return (
        <Container>
            {category.subCategories.map((category, i) => (
                <ListViewBlock
                    key={i}
                    {...category}
                    handleListViewItemClick={handleListViewItemClick}
                />
            ))}
        </Container>
    )
}

export default ListView
