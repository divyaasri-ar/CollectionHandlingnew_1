import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-support-center',
  templateUrl: './support-center.component.html',
  styleUrls: ['./support-center.component.css']
})
export class SupportCenterComponent {
  feedback: string | undefined;

  constructor(private http: HttpClient) { }

  submitFeedback() {
    console.log('Feedback:', this.feedback);
    const feedbackData = {
      feedback: this.feedback
    };
    console.log('Feedback:', this.feedback);

    this.http.post('http://localhost:8770/api/feedback', feedbackData)
      .subscribe(response => {
        alert('Feedback submitted successfully');
        console.log('Feedback submitted successfully:', response);
        // Handle success, e.g., show a success message to the user
      }, error => {
        console.error('Error submitting feedback:', error);
        // Handle error, e.g., show an error message to the user
      });
    }

}
