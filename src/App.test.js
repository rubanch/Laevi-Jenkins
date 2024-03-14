// import { render, screen } from '@testing-library/react';
// import App from './App';
// import App1 from './App1';




// describe ('My test suite', ()=> {
 
//   test('test case-1', () => {
//     render(<App />);
//     var text1= screen.getByText("Hello all this is RUban");
//     expect(text1).toBeInTheDocument();
  
//   });
  
//   test ('test case-2',()=>{
//     render(<App/>);
//     var text2=screen.getByText("Hello ruban");
//     expect(text2).toBeInTheDocument();
//   });


//   test ("testcase3",()=> {
//     render(<App/>)
//     var text3= screen.getByText("vanakam da mapla");
//     expect(text3).toBeInTheDocument();
//   });

//   test ("testcase4",()=> {
//     render(<App/>)
//     var text4= screen.getByTestId("myheading");
//     expect(text4).toBeInTheDocument();
//     expect(text4).toHaveTextContent("I am bat");

//   });
//   test('test case5',()=>{
//     render(<App1/>)
//     const heading = screen.getByTestId(label1)
//     expect(heading).toBeInTheDocument();
//     expect(heading).toHaveTextContent("Sum of Two Numbers");

//   })

  
// });










import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
 
// xdescribe('My Test Suite',()=>{
//   test('Test Case -1',()=>{
//     render(<App/>);
//     var test1=screen.getByTestId('MyHeading');
//     expect(test1).toBeInTheDocument();
//     expect(test1).toHaveTextContent('Welcome to Jest');
//   });
 
//   xtest('Test Case-2',()=>{
//     render(<App/>);
//     const text2=screen.getByText('Hello asha');
//     expect(text2).toBeInTheDocument();
//   });
// });
 
describe('Addition',()=>{
  test('Test Case-1[Render UI]',()=>{
    render(<App/>);
   const txt1= screen.getByTestId('txtbox1');
   const txt2= screen.getByTestId('txtbox2');
   const btn= screen.getByTestId('btn');
 
   expect(txt1).toBeInTheDocument();
   expect(txt2).toBeInTheDocument();
   expect(btn).toBeInTheDocument();
 
  });
 
  test('Test Case-2[Render Label & text]',()=>{
    render(<App/>);
   const heading=screen.getByTestId('heading');
   const lbl1=screen.getByTestId('lbl1');
   const lbl2=screen.getByTestId('lbl2');
   const result=screen.getByTestId('result');
 
   expect(heading).toBeInTheDocument();
   expect(heading).toHaveTextContent('Addition of two numbers');
 
   expect(lbl1).toBeInTheDocument();
   expect(lbl1).toHaveTextContent('Enter No 1');
 
   expect(lbl2).toBeInTheDocument();
   expect(lbl2).toHaveTextContent('Enter No 2');
 
   expect(result).toBeInTheDocument();
   expect(result).toHaveTextContent('Sum :');
 
  });

  test ('test case-3',()=>{
    render(<App/>);
    const textbox1 = screen.getByTestId('txtbox1')
    const textbox2= screen.getByTestId('txtbox2')

    expect(textbox1).toHaveTextContent('');
    expect(textbox2).toHaveTextContent('');
    
  });

  test('test case-4 [testing empty text box]',()=>{
    render(<App/>);
    const sum =screen.getByTestId('btn');

    fireEvent.click(sum); 
    
    const  result= screen.getByTestId('result');
    expect(result).toHaveTextContent("Sum :NaN");




  });

  test( 'test case -5 [testing result successfull', ()=>{
    render(<App/>)
    const textbox1 =screen.getByTestId('txtbox1');
    const textbox2 =screen.getByTestId('txtbox2');
    const addition = screen.getByTestId("btn");
    const Result = screen.getByTestId("result")

    fireEvent.change(textbox1,{ target :{ value:10}});
    fireEvent.change(textbox2,{target : { value:20}});

    fireEvent.click(addition);

    expect(Result).toHaveTextContent("Sum :30")
    



  })
});
 

