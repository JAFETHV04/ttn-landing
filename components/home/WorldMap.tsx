"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const installations = [
  { name: "San Pedro Sula",      country: "Honduras",    coordinates: [-88.025, 15.504] as [number, number] },
  { name: "Tegucigalpa",         country: "Honduras",    coordinates: [-87.206, 14.072] as [number, number] },
  { name: "La Ceiba",            country: "Honduras",    coordinates: [-86.818, 15.757] as [number, number] },
  { name: "Choluteca",           country: "Honduras",    coordinates: [-87.193, 13.298] as [number, number] },
  { name: "Ciudad de Guatemala", country: "Guatemala",   coordinates: [-90.533, 14.641] as [number, number] },
  { name: "San Salvador",        country: "El Salvador", coordinates: [-89.190, 13.692] as [number, number] },
  { name: "Managua",             country: "Nicaragua",   coordinates: [-86.291, 12.136] as [number, number] },
  { name: "San José",            country: "Costa Rica",  coordinates: [-84.086,  9.929] as [number, number] },
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 8;

export default function WorldMap() {
  const [tooltip, setTooltip] = useState<{ name: string; country: string } | null>(null);
  const [zoom, setZoom]       = useState(1);
  const [center, setCenter]   = useState<[number, number]>([-87, 14]);

  const zoomIn  = () => setZoom((z) => Math.min(z * 1.5, MAX_ZOOM));
  const zoomOut = () => setZoom((z) => Math.max(z / 1.5, MIN_ZOOM));
  const reset   = () => { setZoom(1); setCenter([-87, 14]); };

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ background: "#eef0f4", height: 380 }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 1400, center: [-87, 14] }}
        style={{ width: "100%", height: 380 }}
      >
        <ZoomableGroup
          zoom={zoom}
          center={center}
          onMoveEnd={(pos: { zoom: number; coordinates: [number, number] }) => {
            setZoom(pos.zoom);
            setCenter(pos.coordinates);
          }}
          filterZoomEvent={(e: Event) => e.type !== "wheel"}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: { rsmKey: string }[] }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#d8dce8"
                  stroke="#c4c9d8"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover:   { fill: "#c4c9da", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {installations.map(({ name, country, coordinates }) => (
            <Marker
              key={name}
              coordinates={coordinates}
              onMouseEnter={() => setTooltip({ name, country })}
              onMouseLeave={() => setTooltip(null)}
            >
              <circle r={14 / zoom} fill="#e8542a" fillOpacity={0.15} />
              <circle
                r={7 / zoom}
                fill="#e8542a"
                stroke="#fff"
                strokeWidth={2 / zoom}
                style={{ cursor: "pointer", filter: "drop-shadow(0 2px 4px rgba(232,84,42,0.5))" }}
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Zoom controls */}
      <div
        className="absolute top-4 right-4 flex flex-col rounded-xl overflow-hidden shadow-md"
        style={{ border: "1px solid #e0e3ef" }}
      >
        <button
          onClick={zoomIn}
          disabled={zoom >= MAX_ZOOM}
          className="flex items-center justify-center bg-white hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ width: 36, height: 36, fontSize: 20, color: "#16245c", borderBottom: "1px solid #e0e3ef" }}
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          disabled={zoom <= MIN_ZOOM}
          className="flex items-center justify-center bg-white hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ width: 36, height: 36, fontSize: 20, color: "#16245c", borderBottom: "1px solid #e0e3ef" }}
          aria-label="Zoom out"
        >
          −
        </button>
        <button
          onClick={reset}
          className="flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
          style={{ width: 36, height: 36, color: "#8a93a8" }}
          aria-label="Reset view"
          title="Restablecer vista"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            my_location
          </span>
        </button>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-3 shadow-lg pointer-events-none"
          style={{ border: "1px solid #eceef6" }}
        >
          <div className="font-bold text-sm" style={{ color: "#e8542a", letterSpacing: "0.5px" }}>
            {tooltip.country.toUpperCase()}
          </div>
          <div className="text-sm mt-0.5" style={{ color: "#42506f" }}>
            {tooltip.name}
          </div>
        </div>
      )}

      {/* Legend */}
      <div
        className="absolute bottom-6 right-4 bg-white rounded-xl px-4 py-2 shadow-sm"
        style={{ border: "1px solid #eceef6" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#e8542a" }} />
          <span className="text-xs font-semibold" style={{ color: "#5a6275" }}>
            Instalaciones activas
          </span>
        </div>
      </div>
    </div>
  );
}
