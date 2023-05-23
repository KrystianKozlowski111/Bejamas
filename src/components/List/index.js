import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Box from '../Box';
import Sort from '../../Assets/Icons/Sort.svg';
import Arrow from '../../Assets/Icons/Arrow.svg';
import Burger from '../../Assets/Icons/Burger.svg';

import ArrowLeft from '../../Assets/Icons/ArrowLeft.svg';
import ArrowRight from '../../Assets/Icons/ArrowRight.svg';
import useWindowSize from '../../hooks/useWindowSize';
import Select, { components } from 'react-select';
import Xbutton from '../../Assets/Icons/Xbutton.svg';

import {
  Wrapper,
  Pagination,
  BottomRight,
  PaginationButton,
  MobileButtons,
  BottomLeft,
  MobileBox,
  CatText,
  Clear,
  Save,
  CheckboxText,
  BottomContainer,
  RightTop,
  BurgerIcon,
  PriceInputBox,
  Title,
  BoxesWrapper,
  PricesContainer,
  SortButton,
  CatBox,
  Subtitle,
  LeftTop,
  TopContainer,
  SmallDivider,
} from './List.style';

const GET_PRODUCTS = gql`
  query GetProducts(
    $limit: Int
    $offset: Int
    $orderBy: [products_order_by!]
    $where: products_bool_exp
  ) {
    products(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      where: $where
    ) {
      id
      size
      width
      price
      name
      bestseller
      image_src
      image_alt
      height
      details
      currency
      category
    }
    products_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

const GET_CATEGORIES = gql`
  query GetCategories {
    products(distinct_on: category) {
      category
    }
  }
`;

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={Arrow} alt="" />
    </components.DropdownIndicator>
  );
};

function ProductList() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sortColumn, setSortColumn] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState(null);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const { width: windowWidth } = useWindowSize();

  const {
    loading: categoriesLoading,
    error: categoriesError,
    data: categoriesData,
  } = useQuery(GET_CATEGORIES);

  const whereCondition = {
    ...(categoryFilter.length > 0 && { category: { _in: categoryFilter } }),
    ...(priceFilter && {
      price: { _gte: priceFilter[0], _lte: priceFilter[1] },
    }),
  };

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      limit: itemsPerPage,
      offset: currentPage * itemsPerPage,
      orderBy: [{ [sortColumn]: sortOrder }],
      where: whereCondition,
    },
  });

  const totalPages = Math.ceil(
    data?.products_aggregate.aggregate.count / itemsPerPage
  );

  useEffect(() => {
    const newPageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  }, [totalPages]);

  if (error || categoriesError)
    return `Error! ${error.message || categoriesError.message}`;

  const categories = categoriesData?.products.map(
    (product) => product.category
  );

  const toggleSortDirection = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
    setCurrentPage(0);
  };

  const handleSortColumnChange = (selectedOption) => {
    setSortColumn(selectedOption.value);
    setCurrentPage(0);
  };

  const handleFilterChange = (e, category) => {
    if (e.target.checked) {
      setCategoryFilter((prev) => [...prev, category]);
    } else {
      setCategoryFilter((prev) =>
        prev.filter((currentCategory) => currentCategory !== category)
      );
    }
    setCurrentPage(0);
  };

  const handlePriceFilter = (event) => {
    const value = event.target.value;

    setSelectedPriceRange(value);

    switch (value) {
      case '0-20':
        setPriceFilter([0, 20]);
        break;
      case '20-100':
        setPriceFilter([20, 100]);
        break;
      case '100-200':
        setPriceFilter([100, 200]);
        break;
      case '200+':
        setPriceFilter([200, 999999999999]);
        break;
      default:
        setPriceFilter(null);
    }
    setCurrentPage(0);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber - 1);
  };
  const clearFilters = () => {
    setCategoryFilter([]);
    setPriceFilter(null);
    setSelectedPriceRange(null);
    setCurrentPage(0);
    setMobileOpen(false);
  };
  return (
    <Wrapper>
      <TopContainer>
        <LeftTop>
          <Title>Photography /&nbsp;</Title>
          <Subtitle>Premium Photos</Subtitle>
        </LeftTop>
        <RightTop>
          {windowWidth > 767 || mobileOpen ? (
            <SortButton>
              <SortButton onClick={toggleSortDirection}>
                <img src={Sort} alt="" />
                Sort By
              </SortButton>
              <Select
                components={{ DropdownIndicator }}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    border: 'none',
                    boxShadow: 'none',
                  }),
                  menu: (provided, state) => ({
                    ...provided,
                    border: 'none',
                    boxShadow: 'none',
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    fontFamily: 'Archivo',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '22px',
                    lineHeight: '24px',
                  }),
                  singleValue: (provided, state) => ({
                    ...provided,
                    fontFamily: 'Archivo',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '22px',
                    lineHeight: '24px',
                  }),
                  indicatorSeparator: (provided, state) => ({
                    ...provided,
                    borderRight: 'none',
                  }),
                }}
                placeholder="Sort By"
                onChange={handleSortColumnChange}
                value={{ value: sortColumn, label: sortColumn }}
                options={[
                  { value: 'name', label: 'Name' },
                  { value: 'price', label: 'Price' },
                ]}
              />
            </SortButton>
          ) : (
            <BurgerIcon onClick={() => setMobileOpen(true)}>
              <img src={Burger} alt="" />
            </BurgerIcon>
          )}
        </RightTop>
      </TopContainer>
      <BottomContainer>
        {windowWidth > 767 || mobileOpen ? (
          <BottomLeft>
            {categoriesLoading ? (
              'Loading...'
            ) : (
              <>
                {windowWidth < 767 ? (
                  <MobileBox>
                    <CatText>Filter</CatText>
                    <img
                      src={Xbutton}
                      alt="CloseMobile"
                      onClick={() => setMobileOpen(false)}
                    />
                  </MobileBox>
                ) : (
                  <CatText>Category</CatText>
                )}
                {categories.map((category, index) => (
                  <CatBox key={index}>
                    <input
                      type="checkbox"
                      id={`category-${index}`}
                      value={category}
                      checked={categoryFilter.includes(category)}
                      onChange={(e) => handleFilterChange(e, category)}
                    />

                    <CheckboxText htmlFor={`category-${index}`}>
                      {category}
                    </CheckboxText>
                  </CatBox>
                ))}
                <SmallDivider />

                <CatText>Price Range</CatText>
                <PricesContainer onChange={handlePriceFilter}>
                  <PriceInputBox>
                    <input
                      type="radio"
                      value="all"
                      id={`price-all`}
                      name="price"
                      defaultChecked={selectedPriceRange === 'all'}
                    />
                    <CheckboxText htmlFor={`price-all`}>All</CheckboxText>
                  </PriceInputBox>
                  <PriceInputBox>
                    <input
                      type="radio"
                      value="0-20"
                      id={`price-0`}
                      name="price"
                      defaultChecked={selectedPriceRange === '0-20'}
                    />
                    <CheckboxText htmlFor={`price-0`}>
                      Lower than $20
                    </CheckboxText>
                  </PriceInputBox>
                  <PriceInputBox>
                    <input
                      type="radio"
                      value="20-100"
                      id={`price-20`}
                      name="price"
                      defaultChecked={selectedPriceRange === '20-100'}
                    />
                    <CheckboxText htmlFor={`price-20`}>$20 - $100</CheckboxText>
                  </PriceInputBox>
                  <PriceInputBox>
                    <input
                      type="radio"
                      value="100-200"
                      name="price"
                      id={`price-100`}
                      defaultChecked={selectedPriceRange === '100-200'}
                    />
                    <CheckboxText htmlFor={`price-100`}>
                      $100 - $200
                    </CheckboxText>
                  </PriceInputBox>
                  <PriceInputBox>
                    <input
                      type="radio"
                      value="200+"
                      name="price"
                      id={`price-200`}
                      defaultChecked={selectedPriceRange === '200+'}
                    />
                    <CheckboxText htmlFor={`price-200`}>
                      More than $200
                    </CheckboxText>
                  </PriceInputBox>
                </PricesContainer>
                {windowWidth < 767 || mobileOpen ? (
                  <MobileButtons>
                    <Clear onClick={() => clearFilters()}>CLEAR</Clear>
                    <Save onClick={() => setMobileOpen(false)}>SAVE</Save>
                  </MobileButtons>
                ) : (
                  ''
                )}
              </>
            )}
          </BottomLeft>
        ) : (
          ''
        )}
        <BottomRight>
          {loading ? (
            'Loading...'
          ) : (
            <>
              <BoxesWrapper>
                {data &&
                  data.products.map((product) => (
                    <Box key={product.id} product={product} />
                  ))}
              </BoxesWrapper>

              <Pagination>
                {currentPage > 0 && (
                  <PaginationButton
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <img src={ArrowLeft} alt="" />
                  </PaginationButton>
                )}
                {pageNumbers.map((number) => (
                  <PaginationButton
                    key={number}
                    onClick={() => handlePageChange(number)}
                    style={{
                      fontWeight:
                        number === currentPage + 1 ? 'bold' : 'normal',
                      color:
                        number === currentPage + 1 ? ' #000000' : ' #b4b4b4',
                    }}
                  >
                    {number}
                  </PaginationButton>
                ))}
                {currentPage + 1 < totalPages && (
                  <PaginationButton
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    <img src={ArrowRight} alt="" />
                  </PaginationButton>
                )}
              </Pagination>
            </>
          )}
        </BottomRight>
      </BottomContainer>
    </Wrapper>
  );
}

export default ProductList;
