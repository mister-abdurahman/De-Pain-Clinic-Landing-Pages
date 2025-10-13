const endpoint = "https://backend-landing-page-pain.onrender.com/api/v1/leads";

export const submitLead = async (data: {
  name: string;
  phone_number: string;
  date: string;
}) => {
  try {
    const response = await fetch(`${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Response not ok:::::;:", await response.json());
      throw new Error(
        (await response.json().error) || "Network response was not ok"
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting lead:", error);
    throw error;
  }
};

export const fetchLeads = async () => {
  try {
    const response = await fetch(`${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching leads:", error);
    throw error;
  }
};

export const deleteLead = async (id: string) => {
  try {
    const response = await fetch(`${endpoint}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error deleting lead:", error);
    throw error;
  }
};
