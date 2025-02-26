import Realm from 'realm';

//  Fix: Correct Schema with Primary Key
class Login extends Realm.Object<Login> {
  id!: number;
  isUserLoggedIn!: boolean;

  static schema: Realm.ObjectSchema = {
    name: 'Login',
    primaryKey: 'id',
    properties: {
      id: 'int',
      isUserLoggedIn: 'bool',
    },
  };
}

//  Fix: Lazy Realm Instance
const getRealmInstance = () => new Realm({schema: [Login], schemaVersion: 1});

//  Fix: Insert or Update Login Data (Upsert)
const saveLoginData = (id: number, isUserLoggedIn: boolean) => {
  const realm = getRealmInstance();
  try {
    realm.write(() => {
      realm.create('Login', {id, isUserLoggedIn}, Realm.UpdateMode.Modified);
    });
    console.log('Login data saved:', {id, isUserLoggedIn});
  } catch (error) {
    console.error('Error saving login data:', error);
  }
};

//  Fix: Retrieve Login Data (Proper Type Handling)
const getLoginData = (): Login[] => {
  const realm = getRealmInstance();
  try {
    const data = realm.objects<Login>('Login');
    console.log('data in database>>>', data);
    return Array.from(data) as Login[]; // ✅ Convert Realm Results to Standard Array
  } catch (error) {
    console.error('Error retrieving login data:', error);
    return [];
  }
};

//  Fix: Delete Login Data
const deleteLoginData = (id: number) => {
  const realm = getRealmInstance();
  try {
    realm.write(() => {
      const user = realm.objectForPrimaryKey<Login>('Login', id);
      if (user) {
        realm.delete(user);
        console.log(`Login data with ID ${id} deleted.`);
      } else {
        console.log('User not found.');
      }
    });
  } catch (error) {
    console.error('Error deleting login data:', error);
  } finally {
    realm.close();
  }
};

//  Export Functions
export {saveLoginData, getLoginData, deleteLoginData};
