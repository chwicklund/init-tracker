import React from 'react';

import TeamList from "./TeamList";
import InitiativeList from "./InitiativeList";

const App = () => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-sm-4">
                    <TeamList
                        title="Players"
                        stateList="players"
                        characterType="Player"
                    />
                </div>
                <div className="col-sm-4">
                    <InitiativeList />
                </div>
                <div className="col-sm-4">
                    <TeamList
                        title="Enemies"
                        stateList="enemies"
                        characterType="Enemy"
                    />
                </div>
            </div>
        </div>
    );
};

export default App;