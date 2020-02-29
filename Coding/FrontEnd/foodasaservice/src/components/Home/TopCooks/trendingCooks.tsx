import React, { useEffect } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardLink
} from 'reactstrap';
import { fetchTopCooks } from 'Redux/ActionCreators/Chefs';
import { connect } from 'react-redux';
import './trendingCooks.css';

const TrendingCooks = props => {
  useEffect(() => {
    props.fetchTopCooks();
    console.log(props.chefs);
  }, []);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img
          width='100%'
          src='data:image/jpeg;base64,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'
          alt='Card image cap'
        />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dishes: state.dish,
    chefs: state.chef
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchTopCooks: () => {
      dispatch(fetchTopCooks());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingCooks);
