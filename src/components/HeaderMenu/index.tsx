import * as React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

interface Props {
    onGameReset: () => void;
}

const HeaderMenu: React.SFC<Props> = ({ onGameReset }) => {
    return (
        <Toolbar>
            <ToolbarTitle text="Rock - Paper - Scissors" />
            <ToolbarGroup>
                <RaisedButton label="Reset" primary={true} onClick={onGameReset} />
            </ToolbarGroup>

        </Toolbar>
    );
};

export default HeaderMenu;