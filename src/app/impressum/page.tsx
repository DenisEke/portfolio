import CopyEmail from "@/components/CopyEmail";

export default function Impressum() {
  return (
    <main className="text-white flex flex-col mx-auto container xl:px-32 lg:px-8 px-4 w-full gap-8 py-16">
      <h1 className="text-2xl">Impressum</h1>
      <div>
        <p className="font-bold">Denis Ekert</p>
        <p>Alter Finkenkrug 2</p>
        <p>14612 Falkensee</p>
        <p> Brandenburg, Deutschland</p>
      </div>

      <CopyEmail alignLeft />
      <p>+49 176 81033794</p>
      <p>DE-</p>
    </main>
  );
}
