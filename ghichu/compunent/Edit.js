import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import { useState } from 'react';

const Edit = (props) => {
    const [TenCV, setTenCV] = useState(props.route.params.item_gc.TenCV);
    const editt=()=>{
        let _id= props.route.params.item_gc.id;
        
        let objGC={
            TenCV:TenCV
        }
        let api='https://646a4ea670b2302c85e23b6c.mockapi.io/ten/'+_id;
        fetch(api, {
            method: 'put',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(objGC)
            
          })
          .then((res=>{
            if(res.status==200)
            alert("update thành công")
        })
        
        
        )
        .catch((ex)=>{
            console.log(ex);
        })
 
 
    }

  
  return (
    <View>
    <TextInput  value={TenCV} style={{borderWidth:1,borderRadius:10,height:50}}  onChangeText={(txt)=>setTenCV(txt) } />
    <Button title='sửa' onPress={editt}/>
    </View>
    


  )
}

export default Edit

const styles = StyleSheet.create({})