import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges
} from "@angular/core"

@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit, OnChanges {
    @Input() defaultCount: number  = 0
    count = 0

    ngOnChanges(changes: SimpleChanges): void {
        this.count = changes.defaultCount.currentValue
        console.log("============changes=============", changes)
    }

    ngOnInit(): void {
        console.log("initiated")
    }

    handleClick(evt: MouseEvent) {
        this.count++
        console.log(evt)
    }

}
