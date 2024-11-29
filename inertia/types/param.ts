export type RouteParams = {
    "password.confirm": {};
    "dashboard": {};
    "verification.send": {};
    "password.request": {};
    "password.email": {};
    "login": {};
    "logout": {};
    "password.update": {};
    "profile.edit": {};
    "profile.update": {};
    "profile.destroy": {};
    "register": {};
    "password.store": {};
    "password.reset": {
        token: string;
    };
    "verification.notice": {};
    "verification.verify": {
        id: string;
        hash: string;
    };
};
