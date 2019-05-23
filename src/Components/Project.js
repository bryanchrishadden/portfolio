import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VesselTrackerContent from './projects/vessel-tracker-content'
import VTPrototypeContent from './projects/vt-prototype-content'
import HDframeworkContent from './projects/hd-framework-content'
import '../App.css';

class Project extends Component {
    render() {
        const { selectedProject } = this.props
        let ComponentToShow

        switch (selectedProject) {
            case "vesselTrackerProject":
                ComponentToShow = <VesselTrackerContent />
                break;
            case "vt_PrototypeProject":
                ComponentToShow = <VTPrototypeContent />
                break;
            case "hd_internalFramework":
                ComponentToShow = <HDframeworkContent />
                break;
            default:
                ComponentToShow = "none"
                break;
        }

        return (
            <div className="project">
                {ComponentToShow}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.reducers;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);