const readline = require('readline');

class Nokia {
    constructor() {
        this.input = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    displayMenu() {
        console.log("MENU");
        console.log("1. Phone Book");
        console.log("2. Messages");
        console.log("3. Chat");
        console.log("4. Call Register");
        console.log("5. Tones");
        console.log("6. Settings");
        console.log("7. Call Divert");
        console.log("8. Games");
        console.log("9. Calculator");
        console.log("10. Reminders");
        console.log("11. Clock");
        console.log("12. Profiles");
        console.log("13. Sim Service");
        this.input.question("Select option 1-13: ", (choice) => {
            this.menuSelection(choice);
        });
    }

    menuSelection(choice) {
        switch (choice) {
            case '1':
                this.phoneBookMenu();
                break;
            case '2':
                this.messagesMenu();
                break;
            case '3':
                this.chatMenu();
                break;
            case '4':
                this.callRegisterMenu();
                break;
            case '5':
                this.tonesMenu();
                break;
            case '6':
                this.settingsMenu();
                break;
            case '7':
                this.callDivertMenu();
                break;
            case '8':
                this.gamesMenu();
                break;
            case '9':
                this.calculatorMenu();
                break;
            case '10':
                this.remindersMenu();
                break;
            case '11':
                this.clockMenu();
                break;
            case '12':
                this.profilesMenu();
                break;
            case '13':
                this.simServicesMenu();
                break;
            default:
                console.log("Invalid option");
                this.displayMenu();
                break;
        }
    }

    phoneBookMenu() {
        console.log("PHONE BOOK MENU");
        console.log("1. Search");
        console.log("2. Service number");
        console.log("3. Add Name");
        console.log("4. Erase");
        console.log("5. Edit");
        console.log("6. Assign tone");
        console.log("7. Send b'card");
        console.log("8. Options");
        console.log("9. Speed dials");
        console.log("10. Voice tags");

        this.input.question("Select option 1-10: ", (phoneBookOption) => {
            switch (phoneBookOption) {
                case '1':
                    console.log("Search ");
                    break;
                case '2':
                    console.log("Service ");
                    break;
                case '3':
                    console.log("Add Name ");
                    break;
                case '4':
                    console.log("Erase ");
                    break;
                case '5':
                    console.log("Edit ");
                    break;
                case '6':
                    console.log("Assign ");
                    break;
                case '7':
                    console.log("Send b'card ");
                    break;
                case '8':
                    console.log("Options");
                    console.log("1. Type of view");
                    console.log("2. Memory Status");
                    this.input.question("Select option 1-2: ", (options) => {
                        switch (options) {
                            case '1':
                                console.log("Type of view ");
                                break;
                            case '2':
                                console.log("Memory Status ");
                                break;
                            default:
                                console.log("Invalid option");
                                break;
                        }
                        this.displayMenu();
                    });
                    break;
                case '9':
                    console.log("Speed dials ");
                    break;
                case '10':
                    console.log("Voice tags ");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }

    messagesMenu() {
        console.log("MESSAGES MENU");
        console.log("1. Write messages");
        console.log("2. Inbox");
        console.log("3. Outbox");
        console.log("4. Picture messages");
        console.log("5. Templates");
        console.log("6. Smileys");
        console.log("7. Message settings");
        console.log("8. Info services");
        console.log("9. Voice mailbox number");
        console.log("10. Services Command editor");

        this.input.question("Select option 1-10: ", (messagesOption) => {
            switch (messagesOption) {
                case '1':
                    console.log("Write messages");
                    break;
                case '2':
                    console.log("Inbox");
                    break;
                case '3':
                    console.log("Outbox ");
                    break;
                case '4':
                    console.log("Picture messages ");
                    break;
                case '5':
                    console.log("Templates ");
                    break;
                case '6':
                    console.log("Smileys ");
                    break;
                case '7':
                    console.log("Message settings ");
                    this.input.question("Select option 1-2: ", (messageSettings) => {
                        switch (messageSettings) {
                            case '1':
                                console.log("Set 1 ");
                                break;
                            case '2':
                                console.log("Common ");
                                break;
                            default:
                                console.log("Invalid option");
                                break;
                        }
                        this.displayMenu();
                    });
                    break;
                case '8':
                    console.log("Info services ");
                    break;
                case '9':
                    console.log("Voice mailbox number ");
                    break;
                case '10':
                    console.log("Services Command editor");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }

    chatMenu() {
        console.log("CHAT MENU");
        console.log("1. Start Chat");

        this.input.question("Select option 1: ", (chatOption) => {
            switch (chatOption) {
                case '1':
                    console.log("Starting chat...");
                    break;
                default:
                    console.log("Invalid option");
                    this.displayMenu();
                    break;
            }
        });
    }

    callRegisterMenu() {
        console.log("CALL REGISTER MENU");
        console.log("1. Last Missed Calls");
        console.log("2. Received calls");
        console.log("3. Dialled numbers");
        console.log("4. Erase recent call lists");
        console.log("5. Show call duration");
        console.log("6. Show Call cost");
        console.log("7. Call cost settings");
        console.log("8. Prepaid Credit");

        this.input.question("Select option 1-8: ", (option) => {
            switch (option) {
                case '1':
                    console.log("Last Missed Calls");
                    break;
                case '2':
                    console.log("Received calls");
                    break;
                case '3':
                    console.log("Dialled numbers");
                    break;
                case '4':
                    console.log("Erase recent call lists");
                    break;
                case '5':
                    console.log("Show call duration");
                    this.showCallDurationMenu();
                    break;
                case '6':
                    console.log("Show Call cost");
                    break;
                case '7':
                    console.log("Call cost settings");
                    break;
                case '8':
                    console.log("Prepaid Credit");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }

    showCallDurationMenu() {
        console.log("SHOW CALL DURATION MENU");
        console.log("1. Last call duration");
        console.log("2. All calls' duration");
        console.log("3. Received calls duration");
        console.log("4. Dialled calls duration");
        console.log("5. Clear Timer");

        this.input.question("Select option 1-5: ", (durationOption) => {
            switch (durationOption) {
                case '1':
                    console.log("Last call duration");
                    break;
                case '2':
                    console.log("All calls' duration");
                    break;
                case '3':
                    console.log("Received calls duration");
                    break;
                case '4':
                    console.log("Dialled calls duration");
                    break;
                case '5':
                    console.log("Clear Timer");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }

    tonesMenu() {
        console.log("TONES MENU");
        console.log("1. Ringing tones");
        console.log("2. Ringing Volume");
        console.log("3. Incoming call alert");
        console.log("4. Composer");
        console.log("5. Message Alert tone");
        console.log("6. Keypad tones");
        console.log("7. Warning and game tones");
        console.log("8. Vibrating alert");
        console.log("9. Screen saver");

        this.input.question("Select option 1-9: ", (tonesOption) => {
            switch (tonesOption) {
                case '1':
                    console.log("Ringing tones");
                    break;
                case '2':
                    console.log("Ringing Volume");
                    break;
                case '3':
                    console.log("Incoming call alert");
                    break;
                case '4':
                    console.log("Composer");
                    break;
                case '5':
                    console.log("Message Alert tone");
                    break;
                case '6':
                    console.log("Keypad tones");
                    break;
                case '7':
                    console.log("Warning and game tones");
                    break;
                case '8':
                    console.log("Vibrating alert");
                    break;
                case '9':
                    console.log("Screen saver");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }

    settingsMenu() {
        console.log("SETTINGS MENU");
        console.log("1. Display settings");
        console.log("2. Network settings");
        console.log("3. Sound settings");
        console.log("4. Security settings");

        this.input.question("Select option 1-4: ", (settingsOption) => {
            switch (settingsOption) {
                case '1':
                    console.log("Display settings");
                    break;
                case '2':
                    console.log("Network settings");
                    break;
                case '3':
                    console.log("Sound settings");
                    break;
                case '4':
                    console.log("Security settings");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }

    callDivertMenu() {
        console.log("CALL DIVERT MENU");
        console.log("1. Activate divert");
        console.log("2. Deactivate divert");

        this.input.question("Select option 1-2: ", (divertOption) => {
            switch (divertOption) {
                case '1':
                    console.log("Activate divert");
                    break;
                case '2':
                    console.log("Deactivate divert");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }

    gamesMenu() {
        console.log("GAMES MENU");
        console.log("1. Snake");
        console.log("2. Tetris");
        console.log("3. Chess");

        this.input.question("Select option 1-3: ", (gameOption) => {
            switch (gameOption) {
                case '1':
                    console.log("Playing Snake...");
                    break;
                case '2':
                    console.log("Playing Tetris...");
                    break;
                case '3':
                    console.log("Playing Chess...");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }

    calculatorMenu() {
        console.log("CALCULATOR MENU");
        console.log("1. Basic Calculator");
        console.log("2. Scientific Calculator");

        this.input.question("Select option 1-2: ", (calcOption) => {
            switch (calcOption) {
                case '1':
                    console.log("Opening Basic Calculator...");
                    break;
                case '2':
                    console.log("Opening Scientific Calculator...");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }

    remindersMenu() {
        console.log("REMINDERS MENU");
        console.log("1. Set New Reminder");
        console.log("2. View Reminders");

        this.input.question("Select option 1-2: ", (reminderOption) => {
            switch (reminderOption) {
                case '1':
                    console.log("Setting new reminder...");
                    break;
                case '2':
                    console.log("Viewing reminders...");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }

    clockMenu() {
        console.log("CLOCK MENU");
        console.log("1. Set Alarm");
        console.log("2. View Time");

        this.input.question("Select option 1-2: ", (clockOption) => {
            switch (clockOption) {
                case '1':
                    console.log("Setting alarm...");
                    break;
                case '2':
                    console.log("Viewing time...");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }

    profilesMenu() {
        console.log("PROFILES MENU");
        console.log("1. General");
        console.log("2. Silent");
        console.log("3. Meeting");

        this.input.question("Select option 1-3: ", (profileOption) => {
            switch (profileOption) {
                case '1':
                    console.log("General profile activated");
                    break;
                case '2':
                    console.log("Silent mode activated");
                    break;
                case '3':
                    console.log("Meeting profile activated");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }

    simServicesMenu() {
        console.log("SIM SERVICES MENU");
        console.log("1. Balance Inquiry");
        console.log("2. Data Usage");
        console.log("3. Recharge");

        this.input.question("Select option 1-3: ", (simOption) => {
            switch (simOption) {
                case '1':
                    console.log("Checking balance...");
                    break;
                case '2':
                    console.log("Checking data usage...");
                    break;
                case '3':
                    console.log("Recharging...");
                    break;
                default:
                    console.log("Invalid option");
                    break;
            }
            this.displayMenu();
        });
    }
}

const nokia = new Nokia();
nokia.displayMenu();
