import React from "react";
import styles from "./styles";

import { Avatar, Divider, Icon, ListItem } from "react-native-elements";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";;
import { colors } from "../../screens/theme";


interface DrawerProps {
    props: any;
    navigation: any;
}

interface ItemProps {
   item:{ 
        icon:{
            name: string;
            type: string;            
        }
        title: string;
        goto: string;
    }
}

const Drawer: React.FC<DrawerProps> = ({ props, navigation }) => {
;

  const itens = [
    {
      title: "Início",
      icon: { name: "home-outline", type: "material-community" },
      goto: "Home",
    },
    {
      title: "Sair",
      icon: { name: "logout", type: "material-community" },
      goto: "SignOut",
    },
  
  ];

  const Item:React.FC<ItemProps> = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.goto)}>
      <ListItem
        leftIcon={
          <Icon
            name={item.icon.name}
            type={item.icon.type}
            color={colors.secudary}
          />
        }
        title={item.title}
        titleStyle={styles.title_item}
        rightIcon={
          <Icon
            name="arrow-right"
            type="simple-line-icon"
            color="#9c9c9c"
            size={15}
          />
        }
      />
      <Divider
        style={[
          styles.divider,
          { marginTop: 0, marginBottom: 0, borderBottomWidth: 0.3 },
        ]}
      />
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <StatusBar />
      <Divider style={styles.divider} />
      <ScrollView style={{ flex: 1 }}>
        {itens.map((item) => (
          <Item item={item} key={item.title} />
        ))}
      </ScrollView>
    </View>
  );
};
export default React.memo(Drawer);