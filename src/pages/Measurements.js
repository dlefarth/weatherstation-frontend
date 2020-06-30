import React from 'react';
import MeasurementsChart from './MeasurementsChart';

class Measurements extends React.Component {
    constructor() {
        super();
        this.state = {measurements: []};
    }
    componentDidMount() {
        const stationId = '5ec6a6c17a5065101cb6d042';
        const baseUrl = process.env.REACT_APP_API; 
        fetch(`${baseUrl}/measurements/${stationId}`, {mode: "cors"})
            .then(res => res.json())
            .then(measurements => this.setState({measurements}));
    }

    render() {
        return (
            <>
                <MeasurementsChart measurements={this.state.measurements} />
            </>
        );
    }
};

export default Measurements;