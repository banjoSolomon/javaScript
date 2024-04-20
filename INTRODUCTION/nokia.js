const readline = require('readline');
class Nokia{
    constructor() {
        this.input = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
    }

    displayMenu(){
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
        console.log("10. Reminder");
        console.log("11. Clock");
        console.log("12. Profiles");
        console.log("13. Sim Service")
    }
    meanuSelection(){
        this.input.question("Select option 1-13: ", (choice)=>{
            switch (choice) {
                case 1:
                    this.phoneBookMenu();
                    break;
                case 2:
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
          this.input.close();
          break;
      }

        
        });
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
                    return; 
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
        console.log("1. Write messages(Select 1 to Write messages: ");
        console.log("2. Inbox (Select 2 to see Inbox: ");
        console.log("3. Outbox (Select 3 to check Outbox: ");
        console.log("4. Picture messages (Select 4 to see Picture messages : ");
        console.log("5. Templates (Select 5 to see Templates: ");
        console.log("6. Smileys (Select 6 for Smileys: ");
        console.log("7. Message settings (Select 7 for message settings: ");
		console.log("8. Info services (Select 8 for info services: ");
		console.log("9. Voice mailbox number (Select 9 for Voice mailbox number: ");
		console.log("10. Services Command editor (Select 10 for Services Command editor: ");

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
                    return;
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

chatMenu(){
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
callRegisterMenu(){
    console.log("Call Register")
    console.log("1. Last Missed Calls (Select 1 to check Last Missed Calls: ");
    console.log("2. Received calls (Select 2 to see All  Received calls: ");
    console.log("3. Dialled numbers (Select 3 for Dialled numbers: ");
    console.log("4. Erase recent call lists (Select 4 to Erase recent call lists : ");
    console.log("5. Show call duration (Select 5 to Show call duration : ");
    console.log("6. Show Call cost (Select 6 to Show Call cost: ");
    console.log("7. Call cost settings (Select 7 for  Call cost settings: "); 
    console.log("8. Prepaid Credit (Select 8 for Prepaid Credit: ");

}

}