import { web_url } from "@/api/request";
import { Stomp } from "stompjs/lib/stomp.js";


export default class socket {
  constructor() {
    this.sock = new WebSocket(`ws://${web_url}/ws`);
    this.stompClient = Stomp.over(this.sock);
    this.prommise = new Promise((resolve, reject) => {
      this.stompClient.connect({ token: sessionStorage.getItem("token") }, () => {
        resolve()
      })
    })
  }
  web_connect() {
    return
  }
  get_total(id) {
    return this.stompClient.subscribe(`/topic/chip/${id}`, function (res) {

    });

  }

  get_lock(callback) {
    this.prommise.then(() => {
      return this.stompClient.subscribe(`/topic/lock`, function (res) {
        callback(res)
      });
    })
  }
  // 开奖结果
  get_lottery(callback) {
    this.prommise.then(() => {
      return this.stompClient.subscribe(`/topic/lottery`, function (res) {
        callback(res)
      });
    })
  }
}
