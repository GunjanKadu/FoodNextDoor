import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Container,
  Row,
  Col
} from 'reactstrap';

const SearchBar = ({ onChangeValue, value, searchParams }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <InputGroup style={{ width: '95.5%', margin: '0px 0px 2% 2%' }}>
              {searchParams !== '' ? (
                <Input
                  placeholder={searchParams}
                  value={value}
                  onChange={onChangeValue}
                />
              ) : (
                <Input
                  placeholder='Enter Your Favourite Dish'
                  value={value}
                  onChange={onChangeValue}
                />
              )}

              <InputGroupAddon addonType='append'>
                <Button color='success'>Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
