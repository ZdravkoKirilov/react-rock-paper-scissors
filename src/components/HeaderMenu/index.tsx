import * as React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

export interface Props {
    title: string;
    onGameReset: () => void;
}

const HeaderMenu: React.SFC<Props> = ({ onGameReset, title }) => {
    return (
        <Toolbar>
            <ToolbarTitle text={title} />
            <ToolbarGroup>
                <RaisedButton label="Reset" primary={true} onClick={onGameReset} />
            </ToolbarGroup>

        </Toolbar>
    );
};

export default HeaderMenu;