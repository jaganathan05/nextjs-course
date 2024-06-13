// our-domain.com/aboutus
import Link from 'next/link'
import { Fragment } from "react";

function AboutusPage() {


  const details = [
    { id : 1, name: 'Yash', role: 'Senior Developer'},
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    ]

    const content = details.map(detail => (
<Link href={`/aboutus/${detail.id}`} key={detail.id}>
        {detail.name}
      </Link>
      
      
    ));
    return <Fragment>
      <h1>The aboutus Page</h1>
      <div>
      {content}
      </div>
    </Fragment>

    
  }
  
  export default AboutusPage;