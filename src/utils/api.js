const API_BASE_URI = "https://kdt-frontend.programmers.co.kr";

const request = async (url, options = {}) => {
  const res = await fetch(`${API_BASE_URI}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-username": "violet9503",
    },
  });

  if (res.ok) {
    return await res.json();
  }
  throw new Error(res.status);
};

export const getDocuments = async () => {
  const data = await request("/documents");

  return await data;
};

export const getDocument = async (pageId) => {
  const data = await request(`/documents/${pageId}`);

  return await data;
};

export const updateDocument = async (pageId, content) => {
  await request(`/documents/${pageId}`, {
    method: "PUT",
    body: JSON.stringify(content),
  });
};

export const createDocument = async (parentId) => {
  const data = await request("/documents", {
    method: "POST",
    body: JSON.stringify({
      title: "",
      parent: parentId,
    }),
  });

  return await data;
};

export const deleteDocument = async (id) => {
  await request(`/documents/${id}`, {
    method: "DELETE",
  });
};
