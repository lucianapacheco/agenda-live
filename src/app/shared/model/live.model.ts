export class Live {
  id: string;
  liveName: string;
  channelName: string;
  liveDate: string;
  liveTime: string;
  liveLink: string;
  registrationDate: string;

  constructor(id : string,liveName : string, channelName : string,
    liveDate: string, liveTime: string, liveLink: string, registrationDate: string){
        this.id = id;
        this.liveName = liveName;
        this.channelName = channelName;
        this.liveDate = liveDate;
        this.liveTime = liveTime;
        this.liveLink = liveLink;
        this.registrationDate = registrationDate;
    }
}
