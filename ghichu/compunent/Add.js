import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Add = () => {
    const [TenCV, setTenCV] = useState('');
    const [date, setdate] = useState(new Date().toUTCString())
    const clear=()=>{
      TenCV=""
    }
    const save=()=>{
        let obj_gc={TenCV:TenCV};
        if(TenCV.length==0){
          alert('không được để trống')
        }else{
          let api='https://646a4ea670b2302c85e23b6c.mockapi.io/ten'

        fetch(api, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj_gc),
})
.then((res)=>{
    if(res.status==201)
    alert(' thêm thành công');
    setTenCV=""
    
})
.catch((ex)=>{
    console.log(ex);
})
        }
        

    }
  return (
    <View>
      <Text style={{fontSize:30}}>thêm ghi chú</Text>
      <TextInput style={{borderWidth:1,borderRadius:10,height:50}} placeholder='tên công việc' onChangeText={(txt)=>{setTenCV(txt)} }  date={date} setdate={setdate} />
      <Button title='thêm' onPress={save}/>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({})