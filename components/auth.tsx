'use client'

import * as Dialog from '@radix-ui/react-dialog'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CloseSquare, Mobile, TickSquare, User } from 'iconsax-react'
import { Input } from './input'
import { Button } from './button'
import { useState } from 'react'
import Link from 'next/link'

export function Auth() {
  const [privacyChecked, setPrivacyChecked] = useState(false)
  const [passwordStep, setPasswordStep] = useState(false)
  const [resetPasswordStep, setResetPasswordStep] = useState(false)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex h-12 items-center justify-center gap-1 rounded-lg border border-neutral-200 border-opacity-60 px-3">
          <User size={22} className="text-secondary" />
          حساب کاربری
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-secondary bg-opacity-50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 flex max-h-[85vh] w-[90vw] max-w-[350px] translate-x-[-50%] translate-y-[-50%] flex-col gap-6 rounded-2xl bg-white p-5 data-[state=open]:animate-contentShow">
          {!resetPasswordStep ? (
            <>
              <Dialog.Title className="flex items-center justify-between text-base font-semibold">
                ورود / ثبت نام
                <Dialog.Close onClick={() => setPasswordStep(false)}>
                  <CloseSquare
                    size={24}
                    className="text-secondary duration-300 hover:rotate-180 hover:text-primary"
                  />
                </Dialog.Close>
              </Dialog.Title>
              {!passwordStep ? (
                <form action="" className="flex flex-col gap-6">
                  <Input
                    type="number"
                    placeholder="شماره تلفن"
                    icon={<Mobile size={20} className="text-secondary" />}
                  />
                  <div className="flex items-center gap-2">
                    <RadixCheckbox.Root
                      id="privacy-checked"
                      checked={privacyChecked}
                      onCheckedChange={() => setPrivacyChecked(!privacyChecked)}
                      className={`flex h-6 w-6 items-center justify-center rounded-md border border-[#E0E0E0] bg-white ${
                        privacyChecked
                          ? '!border-primary !bg-primary !bg-opacity-[0.08]'
                          : ''
                      }`}
                    >
                      <RadixCheckbox.Indicator>
                        <TickSquare
                          variant="Bulk"
                          className="text-primary"
                          size={20}
                        />
                      </RadixCheckbox.Indicator>
                    </RadixCheckbox.Root>
                    <label
                      className={`text-sm font-light`}
                      htmlFor="privacy-checked"
                    >
                      <Link
                        href="#"
                        className="font-medium underline underline-offset-8"
                      >
                        شرایط و قوانین{'  '}
                      </Link>
                      سایت را پذیرفتم.
                    </label>
                  </div>
                  <Button
                    color="primary"
                    classes={`mt-4 ${
                      !privacyChecked
                        ? 'bg-opacity-30 border-opacity-30 cursor-not-allowed'
                        : ''
                    }`}
                    type="button"
                    disabled={!privacyChecked}
                    onClick={() => setPasswordStep(true)}
                  >
                    ادامه
                  </Button>
                </form>
              ) : (
                <form action="" className="flex flex-col gap-6">
                  <Input
                    type="password"
                    placeholder="رمز عبور"
                    icon={<Mobile size={20} className="text-secondary" />}
                  />

                  <Button color="primary" classes="mt-4">
                    ورود
                  </Button>
                  <div className="flex flex-row justify-between gap-4 text-sm font-light text-primary underline underline-offset-8">
                    <button
                      type="button"
                      onClick={() => console.log('code have been sent!!')}
                    >
                      ورود با کد یکبار مصرف
                    </button>
                    <button
                      type="button"
                      onClick={() => setResetPasswordStep(true)}
                    >
                      بازیابی رمز عبور
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            // Reset Password form
            <>
              <Dialog.Title className="flex items-center justify-between text-base font-semibold">
                بازیابی رمز عبور
                <Dialog.Close onClick={() => setResetPasswordStep(false)}>
                  <CloseSquare
                    size={24}
                    className="text-secondary duration-300 hover:rotate-180 hover:text-primary"
                  />
                </Dialog.Close>
              </Dialog.Title>
              <form action="" className="flex flex-col gap-6">
                <Input
                  type="number"
                  placeholder="شماره تلفن"
                  icon={<Mobile size={20} className="text-secondary" />}
                />
                <p className="text-center text-sm font-normal">
                  رمز عبور برای شما ارسال خواهد شد لطفا پس از ورود به سایت از
                  قسمت پنل کاربری رمز عبور خود را تغییر دهید
                </p>
                <Button color="primary" type="button">
                  بازیابی رمز
                </Button>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
