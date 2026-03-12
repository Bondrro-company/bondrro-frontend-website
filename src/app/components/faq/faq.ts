import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule,TranslateModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {

  activeIndex = -1;
  activeCategory = 'sender';

  faqData:any = {

    sender: [

      {
        question: 'faq.sender.q1',
        answer: 'faq.sender.a1'
      },

      {
        question: 'faq.sender.q2',
        answer: 'faq.sender.a2'
      },

      {
        question: 'faq.sender.q3',
        p1: 'faq.sender.a3.p1',
        bullets: [
          'faq.sender.a3.bullet1',
          'faq.sender.a3.bullet2'
        ],
        p2: 'faq.sender.a3.p2'
      },

      {
        question: 'faq.sender.q4',
        answer: 'faq.sender.a4'
      },

      {
        question: 'faq.sender.q5',
        answer: 'faq.sender.a5'
      },

      {
        question: 'faq.sender.q6',
        answer: 'faq.sender.a6'
      },

      {
        question: 'faq.sender.q7',
        p1: 'faq.sender.a7.p1',
        bullets: [
          'faq.sender.a7.bullet1',
          'faq.sender.a7.bullet2',
          'faq.sender.a7.bullet3',
          'faq.sender.a7.bullet4'
        ]
      },

      {
        question: 'faq.sender.q8',
        answer: 'faq.sender.a8'
      }

    ],

    traveler: [

      { question:'faq.traveler.q1', answer:'faq.traveler.a1' },
      { question:'faq.traveler.q2', answer:'faq.traveler.a2' },
      { question:'faq.traveler.q3', answer:'faq.traveler.a3' },
      { question:'faq.traveler.q4', answer:'faq.traveler.a4' },
      { question:'faq.traveler.q5', answer:'faq.traveler.a5' },
      { question:'faq.traveler.q6', answer:'faq.traveler.a6' },
      { question:'faq.traveler.q7', answer:'faq.traveler.a7' },

   

    ],

    payment: [

      { question:'faq.payment.q1', answer:'faq.payment.a1' },

      {
        question:'faq.payment.q2',
        p1:'faq.payment.a2.p1',
        bullets:[
          'faq.payment.a2.bullet1',
          'faq.payment.a2.bullet2'
        ]
      },

      { question:'faq.payment.q3', answer:'faq.payment.a3' },
      { question:'faq.payment.q4', answer:'faq.payment.a4' },

      {
        question:'faq.payment.q5',
        p1:'faq.payment.a5.p1',
        bullets:[
          'faq.payment.a5.bullet1',
          'faq.payment.a5.bullet2',
          'faq.payment.a5.bullet3'
        ],
        p2:'faq.payment.a5.p2'
      },

      { question:'faq.payment.q6', answer:'faq.payment.a6' },

      {
        question:'faq.payment.q7',
        p1:'faq.payment.a7.p1',
        bullets:[
          'faq.payment.a7.bullet1',
          'faq.payment.a7.bullet2',
          'faq.payment.a7.bullet3'
        ]
      },

      { question:'faq.payment.q8', answer:'faq.payment.a8' },
      { question:'faq.payment.q9', answer:'faq.payment.a9' }

    ]

  };

  get faqs(){
    return this.faqData[this.activeCategory];
  }

  setCategory(category:string){
    this.activeCategory = category;
    this.activeIndex = -1;
  }

  toggleFAQ(index:number){
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

}