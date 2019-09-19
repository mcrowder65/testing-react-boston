import React from "react";
import { Container } from "../../reusable/container";
import { compose } from "redux";
import { getPrimaryColor } from "../../redux/selectors";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { SwatchesPicker } from "react-color";
import { updateThemeColor } from "../../redux/actions";
import { Button } from "../../reusable/button";

const RealWorldExample = props => {
  const [swatchColor, setSwatchColor] = React.useState(props.primaryColor);
  return (
    <Container flexDirection="column">
      <SwatchesPicker
        color={swatchColor}
        onChangeComplete={({ hex }) => setSwatchColor(hex)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.updateThemeColor(swatchColor)}
      >
        <FormattedMessage id="real-world.submit" />
      </Button>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    primaryColor: getPrimaryColor(state)
  };
};

const mapDispatchToProps = {
  updateThemeColor
};
const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(RealWorldExample);
