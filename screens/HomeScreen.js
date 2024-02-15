import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://groww.in/groww-logo-270.png" }}
          style={styles.logo}
        />
        <Text style={styles.title}>Groww</Text>
        <Button title="Logout" onPress={() => navigation.goBack()} />
        <Image
          source={{
            uri: "https://wp-asset.groww.in/wp-content/uploads/2021/04/11212758/Lalit_Official-1-1-scaled.jpg",
          }}
          style={styles.userPhoto}
        />
      </View>
      <View style={styles.niftyContainer}>
        <View style={styles.niftyBox}>
          <Text style={styles.niftyTitle}>NIFTY 50</Text>
          <Text style={styles.indexPrice}>21,847.55 +78.50(0.03%)</Text>
        </View>
        <View style={styles.niftyBox}>
          <Text style={styles.niftyTitle}>BANK NIFTY</Text>
          <Text style={styles.indexPrice}>21,847.55 +78.50(0.03%)</Text>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.slider}>
          <Text style={styles.sliderText}>Explore</Text>
          <Text style={styles.sliderText}>Holdings</Text>
          <Text style={styles.sliderText}>Banks</Text>
          <Text style={styles.sliderText}>Large-Caps</Text>
          <Text style={styles.sliderText}>Mid-Caps</Text>
          <Text style={styles.sliderText}>Small-Caps</Text>
        </View>
      </ScrollView>
      <Text style={styles.welcome}>Welcome to Groww..</Text>

      <Text style={styles.mostBoughtText}>Most Bought Stocks on Groww</Text>
      <View style={styles.stockContainer}>
        <View style={styles.stockRow}>
          <View style={styles.stockItem}>
            <Image
              source={{
                uri: "https://w7.pngwing.com/pngs/176/785/png-transparent-zomato-thumbnail-review-platforms-logos-thumbnail.png",
              }}
              style={styles.stockImage}
            />
            <Text style={styles.stockName}>Zomato</Text>
            <Text style={styles.stockValue}>₹156.85</Text>
            <Text style={styles.rate}>+4.70 (3.09%)</Text>
          </View>
          <View style={styles.stockItem}>
            <Image
              source={{
                uri: "https://e7.pngegg.com/pngimages/257/159/png-clipart-hdfc-logo-thumbnail-bank-logos-thumbnail.png",
              }}
              style={styles.stockImage}
            />
            <Text style={styles.stockName}>HDFC Bank</Text>
            <Text style={styles.stockValue}>₹1399.15</Text>
            <Text style={styles.rate}>+15.70 (1.08%)</Text>
          </View>
        </View>
        <View style={styles.stockRow}>
          <View style={styles.stockItem}>
            <Image
              source={{
                uri: "https://companieslogo.com/img/orig/IRFC.NS-7c7137b5.png?t=1632892620",
              }}
              style={styles.stockImage}
            />
            <Text style={styles.stockName}>IRFC</Text>
            <Text style={styles.stockValue}>₹158.20</Text>
            <Text style={styles.rate}>+3.90 (2.53%)</Text>
          </View>
          <View style={styles.stockItem}>
            <Image
              source={{
                uri: "https://cdn.kindlife.in/images/feature_variant/9/mamaearth_brand_kindlife_200x200.png?t=1692456976",
              }}
              style={styles.stockImage}
            />
            <Text style={styles.stockName}>Honasa</Text>
            <Text style={styles.stockValue}>₹445</Text>
            <Text style={styles.rate}>+6.10 (1.39%)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    width: 50,
    height: 50,
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  niftyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 50,
    marginHorizontal: 10,
  },
  niftyBox: {
    borderWidth: 1,
    borderColor: "#000000",
    padding: 10,
    borderRadius: 5,
    height: 64,
    width: 170,
  },
  indexPrice: {
    marginTop: 6,
    fontSize: 13,
    flexDirection: "row",
    color: "green",
  },
  niftyTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  slider: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    marginBottom: 80,
  },
  sliderText: {
    paddingHorizontal: 10,
    marginHorizontal: 8,
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 5,
    color: "white",
    backgroundColor: "purple",
  },
  mostBoughtText: {
    paddingHorizontal: 20,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  stockContainer: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 50,
  },
  stockRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  stockImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  stockItem: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000000",
    padding: 10,
    alignItems: "center",
  },
  stockName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  stockValue: {
    fontSize: 16,
    marginTop: 5,
  },
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
    color: "purple",
    textAlign: "center",
  },
  rate: {
    color: "green",
  },
});

export default HomeScreen;
