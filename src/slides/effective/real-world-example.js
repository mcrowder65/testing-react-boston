import React from "react";
import { Container } from "../../reusable/container";
import { getPrimaryColor } from "../../redux/selectors";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { SwatchesPicker } from "react-color";
import { updateThemeColor } from "../../redux/actions";
import { Button } from "../../reusable/button";
import { Text } from "../../reusable/text";

const RealWorldExample = props => {
  const [swatchColor, setSwatchColor] = React.useState(props.primaryColor);
  return (
    <Container flexDirection="column">
      <Text>
        <FormattedMessage id="real-world.swatch.label" />
      </Text>
      <SwatchesPicker
        color={swatchColor}
        onChange={({ hex }) => setSwatchColor(hex)}
      />
      <Button
        aria-label="update primary color"
        onClick={() => props.updateThemeColor(swatchColor)}
      >
        <FormattedMessage id="real-world.submit" />
      </Button>
      <Text>
        <a
          href="https://github.com/mcrowder65/testing-react-boston/blob/9e83aa9f77170acf42f422880d2e7b1e43f9466b/src/slides/effective/real-world-example.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="real-world.source" />
        </a>
      </Text>
      <Text>
        <a
          href="https://github.com/mcrowder65/testing-react-boston/blob/9e83aa9f77170acf42f422880d2e7b1e43f9466b/src/slides/effective/__tests__/real-world-example.test.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="real-world.test" />
        </a>
      </Text>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RealWorldExample);
