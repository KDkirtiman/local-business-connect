import { Card, CardContent } from "@mui/material";
import { AppHeader } from "../../Module/AppHeader/AppHeader";


function UserDashboard(props) {
    return (
        <>
            <AppHeader/>
            <Card>
                <CardContent>
                    <div>
                        Categories
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export { UserDashboard };
