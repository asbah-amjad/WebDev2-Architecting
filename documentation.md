# Documentation

## Front-end

When in development mode

```bash
cd frontend
yarn install
yarn start
```

### Deployment

The frontend is dockerized and can be run as follows, it to exposes port 80.

```bash
cd frontend
docker build -t sandwich-frontend .
docker run -p 80:80 sandwich-frontend
```

_At the moment it will always build another container, don't know how to rebuild one instead._

### Application Structure

The frontend is React _single-page application_. It only contains three views

- sandwich listing
- payment confirm
- order listing.

Most of the third-party dependencies have been avoided and experimented with different way to implement same things.
The notable summary of technologies are:

- React
- Vanilla JavaScript
- CSS Modules for scoping the css
- Axios for API communication
- Jest for testing


The structure of the application is 

```
// contains all components to be used
components/
    Component/
        Component.js
        Component.module.css
        Component.test.js

// event emitters
events/
    ContenSwitch.js
    NotificationEvent.js

// data to use in testing and development without API
mocks/

// all communication to backend is here
services/
    Service.js
    Service.test.js

// all views "pages"
views/
    OrderListView.js
    OrderListView.module.css

// View name mappings
routes.js

// Settings of the application and other constants
settings.js
```

### Event Based Architeture

This is an experiment for switching views without Redux and React Contexts, and it uses events to request view changes. The app shell will load the listener for it.

After the listener is up the content is swapped by calling

```javascript
fireContentSwitchEvent(viewName)
```

The similar architecture is used with showing notifications.

```javascript
fireNotificationEvent(text, level)
```

### Services

The communication to backend is split to Services that only return the data or a rejects the Promise.

The structure is inspired by Angular, and was seen in Full Stack Open -course.
