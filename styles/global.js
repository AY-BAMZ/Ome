import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pageText: {
    fontFamily: "outfit-semibold",
    color: "#2B2A30",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#79007B",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    fontFamily: "outfit-semibold",
    color: "#fff",
    fontSize: 16,
  },
  buttonTwo: {
    backgroundColor: "#fafafa00",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonTextTwo: {
    fontFamily: "outfit-semibold",
    color: "#79007B",
    fontSize: 16,
  },
  input: {
    maxWidth: "78%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginVertical: 12,
    textAlign: 'center'
  },
  textOne: {
    fontFamily: "outfit-bold",
    color: "#2B2A30",
    fontSize: 40,
  },
  textTwo: {
    fontFamily: "outfit-bold",
    color: "#2B2A30",
    fontSize: 32,
  },
  textThree: {
    fontFamily: "outfit-semibold",
    color: "#2B2A30",
    fontSize: 24,
  },
  textFour: {
    fontFamily: "outfit-semibold",
    color: "#2B2A30",
    fontSize: 20,
  },
  textFive: {
    fontFamily: "outfit-medium",
    color: "#2B2A30",
    fontSize: 18,
  },
  textSix: {
    fontFamily: "outfit-medium",
    color: "#2B2A30",
    fontSize: 16,
  },
  textSeven: {
    fontFamily: "outfit-regular",
    color: "#2B2A30",
    fontSize: 14,
  },
  textEight: {
    fontFamily: "outfit-regular",
    color: "#2B2A30",
    fontSize: 12,
  },
  headerIconBox: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  filter: {
    padding: 8,
    borderRadius: 40,
    width: 40,
    height: 40,
    backgroundColor: '#79007B',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  inputArea: {
    maxWidth: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 44,
    paddingHorizontal: 2,
    borderRadius: 50,
    marginVertical: 12,
    paddingLeft: 10,
    marginTop: 20
  },
});
