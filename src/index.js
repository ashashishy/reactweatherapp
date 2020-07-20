import React from 'react';
import ReactDom from 'react-dom';
import Comment from './Comment'
import ApprovalCard from './ApprovalCard'
const App=()=>{
    return (
    <div className="ui container comments">
    <ApprovalCard ><Comment author="Sam" comment="New blog comment" /></ApprovalCard>
    
    <ApprovalCard ><Comment author="Jam" comment="newer blog comment" /></ApprovalCard>
    <ApprovalCard ><Comment author="Lam" comment="Newest blog comment" /></ApprovalCard>
    </div>
    );
}

ReactDom.render(<App />, document.getElementById('root')); 