import React from 'react'

const card = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    Hello my name is Jarrett Williams, i am agraduate of West Chester University. I am from Upper Darby, PA. I have work experience in many areas but i am now beginning a career as a junior web developer.
    If you would like to get into contact with me for any work you can go to my contact page, or email me directly at the link below.
    </Card.Text>
    Email:
    <Card.Link href="jarrett0204@gmail.com">jarrett0204@gmail.com</Card.Link>
    Linkedin:
    <Card.Link href="https://www.linkedin.com/in/jarrett-williams-73936799/">https://www.linkedin.com/in/jarrett-williams-73936799/</Card.Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default card;
