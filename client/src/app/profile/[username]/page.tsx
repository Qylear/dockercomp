// app/profile/[username]/page.tsx
export function generateStaticParams() {
  // Exemple de liste statique d'utilisateurs (à remplacer par une récupération dynamique des utilisateurs)
  const usernames = ['user1', 'user2', 'user3']; 

  return usernames.map(username => ({
    username, // Cela génère des pages pour chaque 'username'
  }));
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  return <div>Profil de {params.username}</div>;
}
