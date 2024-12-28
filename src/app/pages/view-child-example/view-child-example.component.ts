import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child-example',
  imports: [],
  templateUrl: './view-child-example.component.html',
  styleUrl: './view-child-example.component.css'
})
export class ViewChildExampleComponent implements AfterViewInit {

  @ViewChild('myInput') myInput!: ElementRef; // Non-null assertion operator (!)
  @ViewChild('messageParagraph') messageParagraph!: ElementRef; // Non-null assertion operator (!)

  inputValue: string = "";
  paragraphMessage: string = "";

  ngAfterViewInit() {
    // Access the input element after the view has been initialized
    this.myInput.nativeElement.focus(); // Focus on the input field
    this.inputValue = this.myInput.nativeElement.value;

    this.paragraphMessage = this.messageParagraph.nativeElement.textContent;
    console.log("Paragraph content in ngAfterViewInit:", this.paragraphMessage);
  }

  updateMessage() {
    if (this.myInput) { // Check if myInput is defined
      this.inputValue = this.myInput.nativeElement.value;
    }
    if (this.messageParagraph) {
      this.messageParagraph.nativeElement.textContent = "Message updated!";
      this.paragraphMessage = this.messageParagraph.nativeElement.textContent;
    }
  }

}
