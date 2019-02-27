import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.ul`
    position: absolute;
    top: 0;
    left: 3rem;
    z-index: ${({ theme }) => theme.zIndexSubcatList};

    @media (max-width: ${({ theme }) => theme.tablet}) {
        top: -1rem;
        width: 100%;
    }
`
const ListItem = styled.li`
    position: relative;
    color: ${({ theme }) => theme.lightgrey};
    line-height: 1.6;

    @media (max-width: ${({ theme }) => theme.tablet}) {
        position: absolute;
    }

    &:hover {
        span {
            transform: translateX(2.8rem);
            transition: all 0.2s ease-in-out;
        }

        &:before {
            opacity: 1;
        }
    }

    span {
        position: relative;
        cursor: pointer;
        display: inline-block;
        transition: all 0.25s ease-in-out;

        @media (max-width: ${({ theme }) => theme.tablet}) {
            opacity: 0;
            transform: translateX(2.8rem);
            color: ${({ theme }) => theme.black};
        }

        ${({ active }) =>
            active &&
            css`
                @media (min-width: ${({ theme }) => theme.desktop}) {
                    transform: translateX(2.8rem);
                    transition: all 0.2s ease-in-out;
                    color: ${({ theme }) => theme.black};
                }

                @media (max-width: ${({ theme }) => theme.tablet}) {
                    opacity: 1;
                }
            `}
    }

    &:before {
        content: '';
        position: absolute;
        width: 2rem;
        left: 0;
        top: 0;
        height: 100%;
        background-image: url(${({ arrowGrey }) => arrowGrey});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% auto;
        opacity: 0;
        transition: opacity 0.3s ease;

        ${({ active }) =>
            active &&
            css`
                opacity: 1;
                background-image: url(${({ arrow }) => arrow});
            `}
    }
`

const SubcategoryList = ({
    category,
    subCategoryActive,
    handleSubcategoryClick,
}) => {
    return (
        <Container>
            {category.subCategories.map((item, i) => (
                <ListItem
                    key={item.title}
                    active={subCategoryActive === item.title}
                    onClick={() => handleSubcategoryClick(item.title)}
                    arrow={'/static/images/black-arrow.png'}
                    arrowGrey={'/static/images/grey-arrow.png'}
                >
                    <span>{item.title}</span>
                </ListItem>
            ))}
        </Container>
    )
}

export default SubcategoryList
