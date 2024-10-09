import Image from 'next/image';

export default function AboutSection() {
    return   (
    <div>
      <>
    <Image
      src="/profile.jpg"
      alt="Profile Picture"
      width={150}
      height={150}
    />
    <h2>name:</h2>
    <p>adressmail:</p>
    </>
  </div>)
  }