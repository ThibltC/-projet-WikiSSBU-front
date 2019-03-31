import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getRandomSpirit } from '../actions/spiritsActions'

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { MoreHoriz } from '@material-ui/icons';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 600,
        height: 400,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

class CartoucheRandomSpirits extends Component {

    componentDidMount = () => {
        this.props.getRandomSpirit()
    }

    render() {
        const { randomSpirits, classes } = this.props
        return (
            <div className={classes.root}>
                <GridList cellHeight={300} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    </GridListTile>
                    {randomSpirits && randomSpirits.map((e, i) => (
                        <GridListTile key={`imageSpirit${i}`}>
                            <img src={`http://localhost:8888/${e.path_image}`} alt="imageSpirit" />
                            <GridListTileBar style={{ backgroundColor: '1' }}
                                title={e.name}
                                actionIcon={
                                    <IconButton className={classes.icon}>
                                        <MoreHoriz />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    randomSpirits: state.spirits.randomSpirits,
})

export default connect(mapStateToProps, { getRandomSpirit })(withStyles(styles)(CartoucheRandomSpirits))
