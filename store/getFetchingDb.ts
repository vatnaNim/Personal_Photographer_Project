import { ref } from "vue";
import { fetchData } from "~/services/fetchDataService";
import type {
  iIndexDb,
  iCardDb,
  iFeatureDb,
  IClient,
  IAboutMeDb,
} from "~/types/jsonType";

export const useStore = () => {
  const featureData = ref<iFeatureDb[] | null>(null);
  const cardData = ref<iCardDb[] | null>(null);
  const clientData = ref<IClient[] | null>(null);
  const indexData = ref<iIndexDb[] | null>(null);
  const workData = ref<IAboutMeDb[] | null>(null);

  const fetchAllData = async () => {
    try {
      featureData.value = (await fetchData("featureDb")) || null;
      cardData.value = (await fetchData("cardDb")) || null;
      clientData.value = (await fetchData("clientDb")) || null;
      indexData.value = (await fetchData("indexDb")) || null;
      workData.value = (await fetchData("myWorkDb")) || null;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return {
    featureData,
    cardData,
    clientData,
    indexData,
    fetchAllData,
    workData,
  };
};
