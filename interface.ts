interface NotificationService {
    save(sms : string): void;
}

class SentEmail implements NotificationService{
    private content : string = "";

    save(data : string): void {
        this.content = data;
        console.log(`ส่ง email ให้กับ "${data}" มีข้อความมา`);
    }
}

function main(){
    let sent1 : NotificationService;
    
    sent1 = new SentEmail();
    sent1.save("Sorawit@gmail.com")
}

main();