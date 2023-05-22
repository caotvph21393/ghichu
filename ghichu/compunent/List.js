import { StyleSheet, Text, View, Button, FlatList, ActivityIndicator, TouchableHighlight,Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'

const List = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [dsgc, setdsgc] = useState([]);

  const getList = async () => {
    let api = 'https://646a4ea670b2302c85e23b6c.mockapi.io/ten'

    try {
      const response = await fetch(api);// load dl
      const json = await response.json();//chuyeenr veef json
      setdsgc(json); //đổ dl vào state

    } catch (error) {
      console.error(error);
    }
    finally {
      setisLoading(false)

    }
  }
  const render = ({ item }) => {
    const deletee = () => {
      
      let api_del = 'https://646a4ea670b2302c85e23b6c.mockapi.io/ten/' + item.id
      fetch(api_del, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

      })
        .then((res) => {
          if (res.status == 200) {
            alert('đã xóa');
            getList();
          }

        })
        .catch((ex) => {
          console.log(ex);
        })
        ;
    }
    const alertXoa = () =>
    Alert.alert('thông báo', 'xóa ghi chú?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {deletee()}},
    ]);
    return (
      <View style={styles.item}>
        <View style={{ flex: 6 }}>
        <Text > Tên công việc: {item.TenCV}</Text>
        <Text > date: {item.date}</Text>
        </View>

        
        <View style={{ flex: 1 }}>
          <Button title='xóa'  onPress= {alertXoa} />
          <Button title='sửa' onPress={() => { props.navigation.navigate('edit', { item_gc: item }) }}></Button>
        </View>


      </View>
    )


  }

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // do something
      getList();// gọi hàm load dữ liệu
    });

    return unsubscribe;
  }, [props.navigation]);



  return (
    <View>
      <View style={styles.header}>

        <Text style={styles.textheader}>Ghi chú</Text>

        <View style={styles.add}>
          <Button title='thêm' onPress={() => { props.navigation.navigate('add') }} />
        </View>






      </View>




      {
        (isLoading) ? (
          <ActivityIndicator />
        ) : (
          <FlatList data={dsgc}
            keyExtractor={(item_gc) => { return item_gc.id }}
            renderItem={render}

          />
        )
      }



    </View>
  )
}

export default List

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#66FFFF',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row'
  },
  header: {
    flexDirection: 'row'
  },
  add: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,


    padding: 10

  },
  textheader: {
    flex: 3,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFCC00',
    marginLeft: 10,
    marginVertical: 10,
  }
})