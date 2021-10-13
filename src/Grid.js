
import React from 'react';
 const titles=[];
 
const Grid = ({ config, data }) => (
  


  <table>
    <thead>
    <tr>
    {config.map((item, index) => (
      
                 <th>{item.title}
    {console.log(item.title)}
    {titles.push(item.field)}
                  </th>

               
      
                ))}
      
    </tr>
    </thead>
    <tbody>


    {data.map((item1, index1) => (
                <tr>

{titles.map((item, index) => (
               
                <td>{item1[titles[index]]}</td>
            
                ))}

                   
                
              </tr>
                ))}
   
    </tbody>
  </table>
);

export default Grid;