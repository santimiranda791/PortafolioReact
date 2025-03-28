import React from 'react'

export const ItemSkillsBody = () => {
  return (
    <div className='skills-container'>    
    <div>
        <p>Java</p>
<box-icon name='java' type='logo' animation='flashing' color='#fff5f5' size="15rem" ></box-icon>    
<progress value="40" max="100"></progress> 
<span>40%</span>

</div>

<div>
    <p>JavaScript</p>
<box-icon name='javascript' type='logo' animation='flashing' color='#ffffff' size="15rem" ></box-icon>
<progress value="50" max="100"></progress>
<span>50%</span>
</div>

<div>
    <p>React</p>
<box-icon name='react' type='logo' animation='spin' color='#ffffff' size="15rem" ></box-icon>
<progress value="30" max="100"></progress>
<span>30%</span>
</div>
</div>
  )
}

