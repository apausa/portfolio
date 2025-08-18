// import { useEffect, useState } from "react";

// import dynamic from "next/dynamic";

// import { Card } from "@/components/ui/card";

// // Dynamically import MapContainer to avoid SSR issues

// const MapContainer = dynamic(
//   async () => import("react-leaflet").then((mod) => mod.MapContainer),
//   { ssr: false },
// );
// const TileLayer = dynamic(
//   async () => import("react-leaflet").then((mod) => mod.TileLayer),
//   { ssr: false },
// );

// export default function Location() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(false);
//   }, []);

//   return (
//     <Card className="col-span-1 overflow-hidden p-0">
//       {isLoading ? (
//         <p className="p-4">Loading map...</p>
//       ) : (
//         <div className="w-full aspect-square">
//           <MapContainer
//             boxZoom={false}
//             center={[40.4167, -3.7033]}
//             doubleClickZoom={false}
//             dragging={false}
//             keyboard={false}
//             scrollWheelZoom={false}
//             style={{ height: "100%", width: "100%" }}
//             touchZoom={false}
//             zoom={12}
//             zoomControl={false}
//           >
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           </MapContainer>
//         </div>
//       )}
//     </Card>
//   );
// }
