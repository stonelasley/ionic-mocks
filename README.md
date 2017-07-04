[![Build Status](https://travis-ci.org/stonelasley/ionic-mocks.svg?branch=master)](https://travis-ci.org/stonelasley/ionic-mocks)

# ionic-mocks
Simple test doubles for Ionic 2+ using Jasmine Spy Objects

This project is still very early in development and there are several things I'm sorting out. However since this is only meant
to be used in your tests it should be safe to pull into a project.

## Supported Types
- ActionSheet
- ActionSheetController
- Alert
- AlertController
- App
- Content
- Config
- Events
- Form
- Haptic
- InfiniteScroll
- ItemSliding
- Keyboard
- Loading
- LoadingController
- Menu
- MenuController
- Modal
- ModalController
- Platform
- Popover
- PopoverController
- NavController
- Nav
- NavParams
- StatusBar
- Tab
- Tabs
- Toast
- ToastController
- ViewController

## Installation
```bash
npm install --save-dev ionic-mocks
```

### Examples

```typescript
import {Events, AlertController} from 'ionic-angular';
import {EventsMock, AlertControllerMock} from 'ionic-mocks';

describe('MyClass', () => {

    let events: Events;
    let alertCtrl: AlertController;

    let classUnderTest: MyClass;

    beforeEach(() => {

        events = EventsMock.instance();
        alertCtrl = AlertControllerMock.instance();

        classUnderTest = new MyClass(events, alertCtrl);
    });


    it('should subscribe to events', () => {
    	expect(events.subscribe).toHaveBeenCalled();
    });

    it('should call alert create', () => {

        classUnderTest.showAlert();

        expect(alertCtrl.create).toHaveBeenCalled();
    });
});
```

### Pre-mocked return types
```typescript
import {Events, AlertController, Alert} from 'ionic-angular';
import {EventsMock, AlertControllerMock, AlertMock} from 'ionic-mocks';

describe('MyComponent', () => {

    let alert: Alert;
    let events: Events;
    let alertCtrl: AlertController;

    let classUnderTest: MyClass;

    beforeEach(() => {

        events = EventsMock.instance();
        alert = AlertMock.instance():
        alertCtrl = AlertControllerMock.instance(alert);

        classUnderTest = new MyClass(events, alertCtrl);
    });


    it('should call present on alert', (done) => {

        classUnderTest.showAlert().then(() => {
            expect(alert.present).toHaveBeenCalled();
            done();
        });

    });
});
```

### Override ionic providers in TestingModule
```typescript
TestBed.configureTestingModule({
    imports: [IonicModule],
    declarations: [MyComponentUnderTest],
    providers: [
            {provide: ViewController, useFactory: () => ViewControllerMock.instance()}
    ]
});
```
