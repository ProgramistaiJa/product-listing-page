import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import { CardActions } from 'material-ui/Card';

class ColorsButtons extends React.Component {
    render(){
        const { product, classes, handleClick } = this.props;
        return(
            <CardActions>
                {
                    product.domino
                        ?<Button
                            className={classNames(classes.button, classes.cssDomino)}
                            mini
                            variant="fab"
                            onClick={(e => handleClick(e, `${product.domino.image}`, `${product.domino.price}`))}
                        >d</Button>
                        :null
                }

                {
                    product.scout
                        ?<Button
                            className={classNames(classes.button, classes.cssScout)}
                            mini
                            variant="fab"
                            onClick={(e => handleClick(e, `${product.scout.image}`, `${product.scout.price}`))}
                        >s</Button>
                        :null
                }
                {
                    product.bebop
                        ? <Button
                            className={classNames(classes.button, classes.cssBebop)}
                            mini
                            variant="fab"
                            onClick={(e => handleClick(e, `${product.bebop.image}`, `${product.bebop.price}`))}
                        >b</Button>
                        :null
                }
                {
                    product.jetty
                        ? <Button
                            className={classNames(classes.button, classes.cssJetty)}
                            mini
                            variant="fab"
                            onClick={(e => handleClick(e, `${product.jetty.image}`, `${product.jetty.price}`))}
                        >j</Button>
                        :null
                }
                {
                    product.bb
                        ? <Button
                            className={classNames(classes.button, classes.cssBB)}
                            mini
                            variant="fab"
                            onClick={(e => handleClick(e, `${product.bb.image}`, `${product.bb.price}`))}
                        >bb</Button> :null
                }
            </CardActions>
        )
    }
}

ColorsButtons.propTypes = {
    classes: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default ColorsButtons