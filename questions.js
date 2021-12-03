export class questions {

     HomeScreen({ navigation }) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
              title="sanyi "
              onPress={() => navigation.replace('Details')}
            />
            
          </View>
        );
      }
      

}