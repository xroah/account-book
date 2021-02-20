import {Component} from "@angular/core"

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "client"
    id="appRoot"
    count = 10

    reset() {
        this.count = Math.random() * 100 >>> 0
    }
}
