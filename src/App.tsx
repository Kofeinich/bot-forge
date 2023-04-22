import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Paths} from './core/paths/paths'
import {ProfilePage} from "./pages/profile/ProfilePage";
import {ProfileSettingsPage} from "./pages/profile-settings/ProfileSettingsPage";
import {MainPage} from "./pages/main/MainPage";
import {EditorPage} from "./pages/editor/EditorPage";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={Paths.MAIN} element={<MainPage/>}/>
                <Route path={Paths.EDITOR} element={<EditorPage/>}/>
                <Route path={Paths.PROFILE} element={<ProfilePage/>}/>
                <Route path={Paths.PROFILESETTINGS} element={<ProfileSettingsPage/>}/>
            </Routes>
        </BrowserRouter>

    );
}

